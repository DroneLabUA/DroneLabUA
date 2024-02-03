import React from 'react'
import PropTypes from 'prop-types'
import { ArticleItemTemplate } from '../../templates/article-item'

const ArticleItemPreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <ArticleItemTemplate
        isVisible={data.isVisible}
        heroImage={getAsset(data.heroImage)}
        heroTitle={data.heroTitle}
        heroSubtitle={data.heroSubtitle}
        content={widgetFor('body')}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

ArticleItemPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default ArticleItemPreview
