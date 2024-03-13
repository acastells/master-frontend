import { mapToCollection } from 'common/mappers';
import {
  mapCharacterFromApiToVm,
  mapCharacterFromGraphQLToVm,
} from 'pods/character/character.mappers';
import { Character } from 'pods/character/character.vm';
import * as React from 'react';
import { getCharacterCollection, getCharacterCollectionGraphQL } from './api';

export const useCharacterCollection = () => {
  const [page, setPage] = React.useState(1);
  const [characterCollection, setCharacterCollection] = React.useState<
    Character[]
  >([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (process.env.API_ENDPOINT === "public_api"){
      window.addEventListener('scroll', handleScrollDebounced);
      return () => window.removeEventListener('scroll', handleScrollDebounced);
    }
  }, [loading]);

  function debounce(func, wait = 500) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  const handleScrollDebounced = debounce((e) => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.offsetHeight;
    const scrollTop = window.scrollY;
    const isAtBottom = windowHeight + scrollTop >= documentHeight;

    if (isAtBottom && loading === false) {
      setPage(page + 1);
      loadCharacterCollection(page + 1);
    }
  });

  const loadCharacterCollection = (page = 1) => {
    setLoading(true);
    const APIOption = localStorage.getItem('APIOption');

    if (APIOption === 'REST') {
      getCharacterCollection(page).then((result) => {
        const collection = mapToCollection(result, mapCharacterFromApiToVm);
        setCharacterCollection([...characterCollection, ...collection]);
        setLoading(false);
      });
    } else if (APIOption === 'GraphQL') {
      getCharacterCollectionGraphQL(page).then((result) => {
        const collection = mapToCollection(result, mapCharacterFromGraphQLToVm);
        setCharacterCollection([...characterCollection, ...collection]);
        setLoading(false);
      });
    } else {
      throw `APIOption: ${APIOption} not implemented`;
    }
  };

  return { characterCollection, loadCharacterCollection };
};
