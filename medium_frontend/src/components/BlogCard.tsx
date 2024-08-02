interface BlogCardProps {
  authorName : string;
  title: string;
  content: string;
  publishedDate: string;
}

export const BlogCard = ({authorName, title, content, publishedDate}:BlogCardProps) => {
  return <div className="p-4 pt-2 border-b pb-3">
    <div className="flex">
      <div className="pl-1 flex justify-center flex-col"><Avatar name={authorName}/></div>      
      <div className="font-extralight pl-1">
          {authorName}
      </div>
      <div className="flex justify-center flex-col pl-2">
        <Circle></Circle>        
      </div>
      <div className="pl-2 font-thin text-slate-500">
          {publishedDate}
      </div>
    </div>
    
    <div className="pt-3 text-lg font-bold">
      {title}
    </div>

    <div className="font-thin">
      {/* A checkpoint to display "..." if content size is > 100 only */}
      {content.length > 150 ? content.slice(0, 150)+"..." : content}
    </div>

    <div className="text-slate-400 font-thin text-sm pt-4">
      {`${Math.ceil(content.length / 100)} minute(s) read`}
    </div>
    
  </div>

}

function Circle() {
  return <div className="h-1 w-1 rounded-full bg-slate-500">

  </div>
}

export function Avatar({name}:{name:string}) {
  return <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-500">
    <span className="text-xs text-gray-600 dark:text-gray-300">{name[0].toUpperCase()}</span>
</div>
}