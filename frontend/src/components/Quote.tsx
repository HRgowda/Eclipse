interface QuoteInput {
  label: string;
  founder: string;
  identity: string;
}

export const Quote = ({label, founder, identity}: QuoteInput) =>{
  return <div className="bg-slate-200 h-screen flex justify-center flex-col">
    <div className="flex justify-center">
      <div className="max-w-md">
        <div className="text-2xl font-bold">
            {label}
        </div>

        <div className="max-w-md  text-xl font-semibold mt-4">
          {founder}
        </div>

        <div className="max-w-md  text-md font-semibold text-slate-500">
            {identity}
        </div>

    </div>        
  </div>
</div>
    
}