const fs = require('fs');

const config = `
[GENERAL]
SIMILARITY_MEASURE = "cosine"
KEEP_ALIVE = "5m"

[MODELS.OPENAI]
API_KEY = "${process.env.OPENAI_API_KEY}"

[MODELS.GROQ]
API_KEY = "${process.env.GROQ_API_KEY}"

[MODELS.ANTHROPIC]
API_KEY = "${process.env.ANTHROPIC_API_KEY}"

[MODELS.GEMINI]
API_KEY = "${process.env.GEMINI_API_KEY}"

[MODELS.CUSTOM_OPENAI]
API_KEY = "${process.env.CUSTOM_OPENAI_KEY}"
API_URL = "${process.env.CUSTOM_OPENAI_URL}"
MODEL_NAME = "${process.env.CUSTOM_OPENAI_MODEL}"

[MODELS.OLLAMA]
API_URL = "${process.env.OLLAMA_API_URL}"

[MODELS.DEEPSEEK]
API_KEY = "${process.env.DEEPSEEK_API_KEY}"

[MODELS.LM_STUDIO]
API_URL = "${process.env.LM_STUDIO_API_URL}"

[API_ENDPOINTS]
SEARXNG = "${process.env.SEARXNG_URL}"
`;

fs.writeFileSync('config.toml', config);
console.log('✅ config.toml generated');
