import React, { useState, FC, MouseEvent, ReactNode } from 'react'
import 'photoswipe/dist/photoswipe.css'
// import shuffle from '../helpers/shuffle'
import { Gallery, Item,   } from 'react-photoswipe-gallery'


export const createItem = (index, contentFn = false) => {
    if (typeof contentFn === 'function') {
      const content = contentFn(index)
      return {
        caption: `item #${index}`,
        ...(typeof content === 'string' ? { html } : { content }),
      }
    }
  
    return {
      original: `https://placekitten.com/1024/768?image=${index}`,
      thumbnail: `https://placekitten.com/160/120?image=${index}`,
      width: 1024,
      height: 768,
      caption: `kitty #${index}`,
      alt: `photo of kitty #${index}`,
    }
  };


const storyMeta = {
  title: 'Dev/Without Images',
  argTypes: {
    content: {
      control: 'boolean',
    },
  },
}

const Button = ({
  onClick,
  children,
}) => {
  return (
    <button style={{ marginRight: '5px' }} type="button" onClick={onClick}>
      {children}
    </button>
  )
}

const Content  = ({ children }) => ( 
  <div
    style={{
      color: 'white',
      display: 'flex',
      placeContent: 'center',
      flexDirection: 'column',
      height: '100%',
      textAlign: 'center',
    }}
  >
    <h1>{children}</h1>
  </div>
)

const createContent = (i ) => <Content>Content #{i}</Content>

const defaultItems = Array.from({ length: 3 }, (_, i) => createItem(i + 1))

export const WithoutImagesSlider = ({ content }) => {
  const [links, setLinks] = useState(defaultItems)

  const addLink = () =>
    setLinks([
      ...links,
      createItem(links.length + 1, content ? createContent : false),
    ])
  const removeLink = () => setLinks(links.slice(1))
  const swapFirstTwoLinks = () =>
    setLinks([links[1], links[0], ...links.slice(2)])
  const swapLastTwoLinks = () =>
    setLinks([
      ...links.slice(0, links.length - 2),
      links[links.length - 1],
      links[links.length - 2],
    ])
//   const shuffleLinks = () => setLinks([...shuffle(links)])

  return (
    <Gallery options={{ showHideOpacity: true }} withCaption>
      <div style={{ marginBottom: 20 }}>
        <Button onClick={addLink}>Add</Button>
        <Button onClick={removeLink}>Remove</Button>
        <Button onClick={swapFirstTwoLinks}>Swap first two</Button>
        <Button onClick={swapLastTwoLinks}>Swap last two</Button>
        {/* <Button onClick={shuffleLinks}>Shuffle</Button> */}
      </div>
      <ul>
        {links.map((props) => (
          <Item {...props} key={props.original || props.caption}>
            {({ ref, open }) => (
              <li ref={ref }>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    open(e)
                  }}
                >
                  {props.caption}
                </a>
              </li>
            )}
          </Item>
        ))}
      </ul>
    </Gallery>
  )
}

export default WithoutImagesSlider;