import Search from "antd/es/transfer/search";

import './TaskSearch.css';
import { Input } from "antd";

interface ITaskSearchProps {
    search: string;
    setSearch: (value: string) => void;
}

export const TaskSearch = ({search, setSearch}: ITaskSearchProps) => {

  return (
    <div className="search-container">
        <h5> Pesquisar tarefa pelo título</h5>
        <Input type="text" value={search} placeholder="Insira o título da tarefa" onChange={(e) => setSearch(e.target.value)}/>
    </div>
  )
}

