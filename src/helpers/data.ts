const initialValue = `// typescript
function hello(): string {
  return 'Hello, world!';
}

hello();

for (let i:number = 0; i < 10; i++) {
  hello()
}

// ...
`

const initialInstructions = [
  'Write a function that computes fibonacci in Rust',
  "Write a function named 'getNum' that returns number 42",
  "Write a function that returns string 'Hello world'",
  'Write a function to check whether a word is a palindrome.',
  'Write a function to generate a UUID.',
  'Write HTML5 Boilerplate'
]

type Language = {
  [key: string]: string
}

const languages: Language = {
  javascript: 'Javascript',
  typescript: 'TypeScript',
  css: 'CSS',
  json: 'JSON',
  html: 'HTML'
}

const models = [
  'microsoft/Phi-3-mini-4k-instruct',
  'meta-llama/Meta-Llama-3.1-8B-Instruct',
  'mistralai/Mistral-7B-Instruct-v0.3'
]

export { initialValue, initialInstructions, languages, models }
