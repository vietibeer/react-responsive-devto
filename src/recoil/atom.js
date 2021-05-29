import {atom, selector} from 'recoil';

const defaultData = [
  {
    id: 1,
    content: 'Action 1',
    status: 'new',
  },
  {
    id: 2,
    content: 'Action 2',
    status: 'inprogress',
  },
];

const listTodoState = atom({
  key: 'listTodo', // là unique string, bắt buộc phải có nhé.
  default: defaultData, // giá trị mặc định khi khởi tạo.
});

const pkmIdState = atom({
  key: 'currentPkmId',
  default: 1,
});

const articlesState = atom({
  key: 'articles',
  default: []
})
export {listTodoState, pkmIdState, articlesState};
