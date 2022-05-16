import * as React from 'react';
import { useState } from 'react';
import { graphql } from 'gatsby';
import Card from '../components/card.js';

function fuzzyMatch(node, filter) {
  return (node.title.toLowerCase().includes(filter))
    || (node.description.toLowerCase().includes(filter))
    || (node.tags && node.tags.some(tag => tag.toLowerCase().includes(filter)));
}

const IndexPage = ({ data }) => {
  const [filter, setFilter] = useState('');
  const samples = filter
    ? data.allSamplesJson.nodes.filter(node => fuzzyMatch(node, filter.trim().toLowerCase()))
    : data.allSamplesJson.nodes;
  return (
    <>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img width="185" src="https://developer.static.autodesk.com/forgeunified/releases/current/1.0.0.20220510190011/images/autodesk-logo-primary-rgb-black.svg"></img>
          </a>
        </div>
      </nav>
      <header className="py-5 text-center container">
        <h1 className="fw-light">Forge Sample Gallery</h1>
        <p className="lead text-muted">Collection of sample applications built using the <a href="https://forge.autodesk.com">Autodesk Forge</a> platform.</p>
        <input type="text" className="form-control" id="filter" placeholder="Filter" value={filter} onChange={ev => setFilter(ev.target.value)} />
      </header>
      <main className="container">
        <div className="row mb-4" style={{ gap: '1em 0' }}>
          {
            samples.map(sample => <Card key={sample.id} {...sample} />)
          }
        </div>
      </main>
    </>
  )
};

export const query = graphql`
  query {
    allSamplesJson {
      nodes {
        id
        title
        description
        tags
        liveDemoUrl
        sourceUrl
        localImage {
          childImageSharp {
            gatsbyImageData(width: 400)
          }
        }
      }
    }
  }
`

export default IndexPage;
