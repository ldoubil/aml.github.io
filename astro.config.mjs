// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://aml.astral.fan',
	integrations: [
		starlight({
			title: 'AML',
			favicon: '/aml-logo.png',
			logo: {
				src: './src/assets/aml-logo.png',
				alt: 'AML',
				replacesTitle: true,
			},
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Chinese',
					lang: 'zh-CN',
				},
			},
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/AstralNext/AML',
				},
			],
			customCss: ['./src/styles/custom.css'],
			components: {
				Header: './src/components/Header.astro',
				SocialIcons: './src/components/SocialIcons.astro',
				Hero: './src/components/Hero.astro',
			},
			head: [
				{
					tag: 'link',
					attrs: {
						rel: 'preconnect',
						href: 'https://fonts.googleapis.com',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'preconnect',
						href: 'https://fonts.gstatic.com',
						crossorigin: true,
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'stylesheet',
						href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;600;700;800&family=Outfit:wght@600;700;800&display=swap',
					},
				},
			],
			sidebar: [
				{
					label: 'Docs',
					translations: { 'zh-CN': '文档' },
					items: [
						{
							label: 'Getting started',
							translations: { 'zh-CN': '快速开始' },
							slug: 'guides/getting-started',
						},
						{
							label: 'Chinese search',
							translations: { 'zh-CN': '中文搜索与向量词库' },
							slug: 'guides/chinese-search',
						},
					],
				},
			],
		}),
	],
});
