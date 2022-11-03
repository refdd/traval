import React ,{useId, useState} from "react";
import { useForm , Controller } from "react-hook-form"
import Select from 'react-select'

function BookSearch() {
    const {register , handleSubmit , control} = useForm();
    const [data , setData] = useState("") ;
    const options1 = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
     
    ]
    const options2 = [
      { value: '1', label: 'day 1'},
      { value: '2', label: 'day 2' },
      { value: '3', label: 'day 3' },
    ]


    
  return (
    <form onSubmit={handleSubmit((data)  => setData( JSON.stringify(data)) ) }
     className="flex flex-col gap-12 w-full h-full md:gap-6  ">
      <div>
        
        <input
        {...register("place") }
          type="text"
          id="first_name"
          className=" font-sans bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="Directions"
          required
        />
      </div>
      {/* Travael type  */}
      <div>

        <Controller
        control={control}
        defaultValue={options1[0].value}
        name="type"  
        render={({ onChange, value, name, ref }) => (
          <Select
               defaultValue={options1[0]}
              inputRef={ref}
              classNamePrefix="addl-class"
              options={options1}
              value={options1.find(c => c.value === value)}
              onChange={onChange}
            instanceId={"type"}

          />
      )}
        />
      </div>
      {/* tour Duration  */}
      <Controller
      control={control}
      defaultValue={options2[0].value}
       name="items"  
       render={({ onChange, value, name, ref }) => (
        <Select
             defaultValue={options2[0]}
            inputRef={ref}
            classNamePrefix="duation"
            options={options2}
            value={options2.find(c => c.value === value)}
            onChange={onChange}
            instanceId={"name"}
        />
    )}
      />
      <div>
    
      </div>

      <div>
      <button type="submit" className=" w-full text-white bg-[#029e9d] hover:bg-gradient-to-r transition duration-700 hover:from-[#fdc703] hover:to-[#fdc703] hover:bg-right focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-5">Search</button>

      </div>
    </form>
  );
}

export default BookSearch;
