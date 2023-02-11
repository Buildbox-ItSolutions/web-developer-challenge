import React from 'react'

/* testing-library */
import { render } from '@testing-library/react'

/*components */
import Post from '../../../components/Post'

/* faker */
import { faker } from '@faker-js/faker'

const postMockData = {
  figure: faker.image.avatar(),
  name: faker.internet.userName(),
  message: faker.random.words(25),
  id: faker.mersenne.rand()
}

describe('Post', () => {
  it('should render component post correcty', () => {
    const { getByText, getByRole } = render(
      <Post
        figure={postMockData.figure}
        name={postMockData.name}
        message={postMockData.message}
        id={postMockData.id}
      />
    )
    const figure = getByRole('img') as HTMLImageElement
    expect(getByText(postMockData.name)).toBeInTheDocument()
    expect(figure.src).toEqual(postMockData.figure)
    expect(getByText(postMockData.message)).toBeInTheDocument()
  })
})
