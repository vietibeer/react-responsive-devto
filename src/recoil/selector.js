import {selector} from 'recoil';
import {listTodoState, pkmIdState, articlesState} from './atom';

const newListState = selector({
  // newListState này sẽ chứa danh sách các hành động có trạng thái là new.
  key: 'newList', // cũng là unique string và bắt buộc phải có.
  get: ({get}) => {
    // đây là pure function, cũng bắt buộc phải có.
    const list = get(listTodoState); // đây là cách để lấy cả list todo đã tạo với atom ở bước trên.
    return list.filter((item) => item.status === 'new'); // chọn và trả về những thằng có status là new.
  },
});

const pkmDetailState = selector({
  key: 'pkmDetail',
  get: async ({get}) => {
    const id = get(pkmIdState);
    if (!id) {
      return;
    }
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const pkm = await res.json();
      return pkm;
    } catch (err) {
      return null;
    }
  },
});

const inprogressListState = selector({
  // inprogressListState này sẽ chứa danh sách các action có trạng thái là inprogress.
  key: 'inprogressList',
  get: ({get}) => {
    const list = get(listTodoState);
    return list.filter((item) => item.status === 'inprogress');
  },
});

const completedListState = selector({
  key: 'completedList',
  get: ({get}) => {
    const list = get(listTodoState);
    return list.filter((item) => item.status === 'completed');
  },
});

const getArticlesState = selector({
  key: 'getArticles',
  get: ({get}) => {
    const articles = get(articlesState);
    return articles;
  },
  set: async ({set}) => {
    try {
      const res = await fetch(`https://dev.to/api/articles`);
      const articles = await res.json();
      set(articlesState, articles);
    } catch (err) {
      console.log(err);
    }
  },
});

export {newListState, pkmDetailState, completedListState, inprogressListState, getArticlesState};
