import { HfInference } from '@huggingface/inference'
const token = import.meta.env.VITE_API_TOKEN
const hf = new HfInference(token)

const getText = async (model: string, language: string, instruction: string): Promise<string> => {
  const inputs = `${instruction} in ${language}. No explanation needed.`

  const out = await hf.textGeneration({
    model,
    parameters: { max_new_tokens: 250, return_full_text: false },
    inputs
  })

  return out.generated_text
    .replace(/```\w+/g, '')
    .replace(/```/g, '')
    .replace(/### [\w\s]+:/, '')
}

export { getText }
