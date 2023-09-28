import React, { useState } from "react";

const TrieNode = () => {
  const [children, setChildren] = useState({});
  const [isEndOfWord, setIsEndOfWord] = useState(false);

  return { children, isEndOfWord, setChildren, setIsEndOfWord };
};

const Trie = () => {
  const [root, setRoot] = useState(TrieNode());

  const insert = (word) => {
    let node = root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  };

  const search = (prefix) => {
    let node = root;
    for (let char of prefix) {
      if (!node.children[char]) {
        return [];
      }
      node = node.children[char];
    }
    return findWordsWithPrefix(node, prefix);
  };

  const findWordsWithPrefix = (node, prefix) => {
    let results = [];
    if (node.isEndOfWord) {
      results.push(prefix);
    }
    for (let char in node.children) {
      const word = findWordsWithPrefix(node.children[char], prefix + char);
      results = results.concat(word);
    }
    return results;
  };

  return { insert, search };
};

const TrieTypeahead = ({ words }) => {
  const [suggestions, setSuggestions] = useState([]);
  const trie = Trie();

  // Build the Trie with the provided words
  for (let word of words) {
    trie.insert(word);
  }

  const handleSearch = (event) => {
    const prefix = event.target.value;
    setSuggestions(trie.search(prefix));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type to search..."
        onChange={handleSearch}
      />
      <ul>
        {suggestions.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </div>
  );
};



const App = () => {
  const words = [
    "apple",
    "banana",
    "apricot",
    "orange",
    "grape",
    "pineapple",
    // Add more words as needed
  ];

  return (
    <div>
      <h1>Typeahead/Autocomplete using Trie in React</h1>
      <TrieTypeahead words={words} />
    </div>
  );
};

export default App;