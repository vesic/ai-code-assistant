import { ChangeEvent, FC, FormEvent, useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import classes from './Sidebar.module.css'
import { getText } from '../services/getText'

const Sidebar: FC = () => {
  const [loading, setLoading] = useState(false)
  const [instruction, setInstruction] = useState('')
  const { instructions, setInstructions, deleteInstruction, language, model, setCurrentValue } =
    useContext(AppContext)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const currentInput = formData.get('input') as string
    if (!instructions.includes(currentInput)) {
      setInstructions(currentInstructions => [instruction, ...currentInstructions])
    }

    const value = await getText(model, language, instruction)
    setCurrentValue(value)
    setLoading(false)
  }

  const handleDelete = (value: string) => {
    if (confirm('Are you sure?')) {
      deleteInstruction(value)
    }
  }

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault()
    setInstruction(e.target.value)
  }

  const renderInput = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="field">
          <div className={`control ${loading ? 'is-loading' : ''}`}>
            <textarea
              className="textarea has-fixed-size"
              placeholder="Input text here..."
              name="input"
              value={instruction}
              onChange={handleChange}
            ></textarea>
            <button
              disabled={!instruction.length}
              type="submit"
              className={`button is-fullwidth is-small is-dark mt-1 ${loading ? 'is-loading' : ''}`}
            >
              Send
            </button>
          </div>
        </div>
      </form>
    )
  }

  const renderPreviousInstructions = () => {
    return (
      <ul className={classes.ul}>
        {instructions.map(value => (
          <li key={value} className={classes.li}>
            <div className={classes.row}>{value}</div>
            <div className="is-size-7">
              <i className="fa-solid fa-trash" onClick={() => handleDelete(value)}></i>
              <span>&nbsp;</span>
              <i
                onClick={() => setInstruction(value)}
                className="fa-solid fa-square-arrow-up-right"
              ></i>
            </div>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <section className="column is-one-third">
      {renderInput()}
      <hr className="mb-0 mt-2" />
      <div className="block m-1">{renderPreviousInstructions()}</div>
    </section>
  )
}

export default Sidebar
