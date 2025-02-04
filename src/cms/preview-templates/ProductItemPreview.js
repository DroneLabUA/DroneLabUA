import React from 'react'
import PropTypes from 'prop-types'
import { ProductItemTemplate } from '../../templates/product-item'

const ProductItemPreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  const categories = entry.getIn(['categories'])

  if (data) {
    return (
      <ProductItemTemplate
        isVisible={data.isVisible}
        heroImage={getAsset(data.heroImage)}
        heroTitle={data.heroTitle}
        heroSubtitle={data.heroSubtitle}
        content={widgetFor('body')}
        categories={categories && categories.toJS()}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

ProductItemPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default ProductItemPreview
