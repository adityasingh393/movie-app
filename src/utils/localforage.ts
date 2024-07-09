import localforage from 'localforage';

export const loadState = async (key: string) => {
  try {
    const state = await localforage.getItem(key);
    return state === null ? undefined : state;
  } catch (err) {
    console.error("Could not load state", err);
    return undefined;
  }
};

export const saveState = async (key: string, state: any) => {
  try {
    await localforage.setItem(key, state);
  } catch (err) {
    console.error("Could not save state", err);
  }
};
