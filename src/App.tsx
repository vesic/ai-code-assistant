import { FC, useContext } from 'react'
import { Editor } from '@monaco-editor/react'
import { AppContext } from './context/AppContext'
import Toolbar from './components/Toolbar'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

const App: FC = () => {
  const { language, currentValue } = useContext(AppContext)

  return (
    <>
      <Navbar />
      <Toolbar />
      <main className="columns is-gapless">
        <Sidebar />
        <section className="column">
          <Editor
            theme="vs-dark"
            height="90vh"
            language={language}
            value={currentValue}
            options={{ fontSize: 16 }}
          />
        </section>
      </main>
    </>
  )
}

export default App
