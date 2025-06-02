const fs = require('fs');
const toml = require('@iarna/toml');

const config = {
  GENERAL: {
    SIMILARITY_MEASURE: 'cosine',
    KEEP_ALIVE: '5m'
  },
  MODELS: {
    OPENAI: { API_KEY: process.env.OPENAI_API_KEY || '' },
    GROQ: { API_KEY: process.env.GROQ_API_KEY || '' },
    ANTHROPIC: { API_KEY: process.env.ANTHROPIC_API_KEY || '' },
    GEMINI: { API_KEY: process.env.GEMINI_API_KEY || '' },
    CUSTOM_OPENAI: {
      API_KEY: process.env.CUSTOM_OPENAI_API_KEY || '',
      API_URL: process.env.CUSTOM_OPENAI_API_URL || '',
      MODEL_NAME: process.env.CUSTOM_OPENAI_MODEL_NAME || ''
    },
    OLLAMA: {
      API_URL: process.env.OLLAMA_API_URL || ''
    },
    DEEPSEEK: { API_KEY: process.env.DEEPSEEK_API_KEY || '' },
    LM_STUDIO: {
      API_URL: process.env.LM_STUDIO_API_URL || ''
    }
  },
  API_ENDPOINTS: {
    SEARXNG: process.env.SEARXNG || ''
  }
};

const tomlString = toml.stringify(config);
fs.writeFileSync('config.toml', tomlString);
console.log('✅ config.toml generated!');
