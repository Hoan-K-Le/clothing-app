import './categories.styles.scss'
import CategoryItem from '../category-item/Category-item.component'

const CategoriesMenu = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map(category => (
        <CategoryItem category={category} />
      ))}
    </div>
  )
}

export default CategoriesMenu
