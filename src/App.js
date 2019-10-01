import React from 'react';

import MainArea from './components/MainArea';
import CategoryDrawer from './components/CategoryDrawer';
import AddTodo from './components/AddTodo';
import AddCategory from './components/AddCategory';
import TodoList from './components/TodoList';
import CategoryList from './components/CategoryList';
import TitleBar from './components/TitleBar';

function App() {
  return (
    <div>
      {/* You will need to comment out the title bar, in order to see the AddTodo component */}
      <TitleBar/>
      <CategoryDrawer>
        <AddCategory/>
        <CategoryList/>
      </CategoryDrawer>
      <MainArea>
        <AddTodo/>
        <TodoList/>
      </MainArea>
    </div>
  );
}

export default App;
