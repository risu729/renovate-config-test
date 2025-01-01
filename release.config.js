// ref: https://semantic-release.gitbook.io/semantic-release/usage/configuration

/**
 * @type {import("semantic-release").Options}
 */
const config = {
	// biome-ignore lint/nursery/noTemplateCurlyInString: semantic-release uses lodash template
	tagFormat: "${version}",
	plugins: [
		"@semantic-release/commit-analyzer",
		"@semantic-release/release-notes-generator",
		"@semantic-release/github",
	],
};

export default config;
