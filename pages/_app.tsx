import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import cookies from 'next-cookies'
import { Instance } from 'mobx-state-tree'
import { Provider as MobxProvider } from 'mobx-react'
import createAppModel, { AppModel } from '~/models/app'
import createThemeModel, { ThemeModel } from '~/models/theme'
import ServicesManager from '~/services/ServicesManager'
import ThemeUpdateObserver from '~/components/ThemeUpdateObserver'

export default class MyApp extends App {
  appModel: Instance<typeof AppModel>
  themeModel: Instance<typeof ThemeModel>

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {
      savedTheme: cookies(ctx).theme
    }

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  get models() {
    return {
      app: this.appModel,
      theme: this.themeModel
    }
  }

  constructor(props) {
    super(props)
    this.appModel = createAppModel()
    this.themeModel = createThemeModel(props.pageProps.savedTheme || 'light')
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head />
        <MobxProvider {...this.models}>
          <>
            <ServicesManager />
            <ThemeUpdateObserver>
              <Component {...pageProps} />
            </ThemeUpdateObserver>
          </>
        </MobxProvider>
      </Container>
    )
  }
}
