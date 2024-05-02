import { DatePicker, Select } from "antd";
import { format } from "date-fns";
import { useState } from "react";

export interface ITaskFilter {
    filterType: string;
    setFilterType: (value: string) => void;
    date: string;
    setDate: (value: string) => void;
}

const Filter = (props: ITaskFilter) => {

    function onChangeDate(date: any, dateString: any) {
      if(props.filterType === "day" || props.filterType === "month") {
          props.setDate(dateString);
      } else {
          props.setDate(format(date.$d, 'MM-dd-yyyy'))
      }
    }

    return (
        <div>
             <Select defaultValue={"day"} onChange={(value) => props.setFilterType(value)} options={[{ value: 'day', label: <span>Dia</span> }, { value: 'week', label: <span>Semana</span> }, { value: 'month', label: <span>Mês</span> }]} />
             {props.filterType === 'day' ?
                 <DatePicker onChange={onChangeDate}/>

                : props.filterType === 'week' ?
                  <DatePicker picker="week" onChange={onChangeDate} />

                : props.filterType === 'month' ? 
                  <DatePicker picker="month" onChange={onChangeDate} />
                : <DatePicker onChange={onChangeDate} />
             }
        </div>
    )
}

export default Filter;