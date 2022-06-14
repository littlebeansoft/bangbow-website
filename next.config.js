const withPlugins = require('next-compose-plugins')
const withAntdLess = require('next-plugin-antd-less')
const withBundleAnalyzer = require('@next/bundle-analyzer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  webpack(config) {
    return config
  },
}

const pluginAntdLess = withAntdLess({
  modifyVars: {
    '@primary-color': process.env.PRIMARY_COLOR,
    '@link-color': process.env.PRIMARY_COLOR,
    '@border-radius-base': '6px',
    '@font-size-base': '16px',
    '@text-color': '#000',
    '@heading-color': '#000',
    '@body-background': '#fff',
    '@font-family': "'Prompt', sans-serif",
  },
})

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withPlugins([pluginAntdLess, bundleAnalyzer], {
  nextConfig,
})
