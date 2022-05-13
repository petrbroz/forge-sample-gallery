import * as React from 'react';
import { useState } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Card from '../components/card';
import { search, list } from './index.module.css';

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
    <Layout>
      <div className={search}>
        <label>Filter</label>{' '}
        <input type="text" name="filter" value={filter} onChange={ev => setFilter(ev.target.value)}></input>
      </div>
      <ul className={list}>
        {
          samples.map(sample => (
            <li key={sample.id}>
              <Card {...sample} />
            </li>
          ))
        }
      </ul>
    </Layout>
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
        screenshotUrl
        liveDemoUrl
        sourceUrl
      }
    }
  }
`

export default IndexPage;
