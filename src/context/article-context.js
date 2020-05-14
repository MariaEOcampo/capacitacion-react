import React from 'react'

const ArticleContext = React.createContext();

export const ArticleProvider = ArticleContext.Provider
export const ArticleConsumer = ArticleContext.Consumer

export default ArticleContex;