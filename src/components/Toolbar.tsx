import { FC, useContext } from 'react'
import { languages, models } from '../helpers/data'
import classes from './Toolbar.module.css'
import { AppContext } from '../context/AppContext'

const Toolbar: FC = () => {
  const { language, setLanguage, model, setModel } = useContext(AppContext)

  const renderLanguages = () => {
    return (
      <div className="tags">
        {Object.entries(languages).map(([key, value]) => (
          <span
            key={key}
            onClick={() => setLanguage(key)}
            className={`tag is-hoverable ${key === language ? 'is-primary' : ''}`}
          >
            {value}
          </span>
        ))}
      </div>
    )
  }

  const renderModels = () => {
    return (
      <div className="select is-size-7">
        <select onChange={e => setModel(e.target.value)} value={model}>
          {models.map(value => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
    )
  }

  return (
    <section className={classes.tools}>
      <div>{renderModels()}</div>
      <div>{renderLanguages()}</div>
    </section>
  )
}

export default Toolbar
