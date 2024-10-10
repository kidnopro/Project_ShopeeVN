import type {RegisterOptions, UseFormRegister} from 'react-hook-form'


interface Props{
     type: React.HTMLInputTypeAttribute
     errorMessage?: string
     placeholder?: string
     className?: string
     name: string
     register: UseFormRegister<any>
     rules?: RegisterOptions
     
}


export default function Input(  {type,errorMessage,placeholder,className,name,register,rules}:Props  ) {
  return (
     <div className= {className}>
     <input
       type={type}
       className="p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm"
       placeholder= {placeholder}
       {...register(name, rules)}
     />
   
   <div className="mt-2 text-red-600 min-h-[1.25rem].text0-sm">
     {errorMessage}
   </div>
</div>
  )
}
