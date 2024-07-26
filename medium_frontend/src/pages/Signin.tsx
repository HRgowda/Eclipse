import { Quote } from "../components/Quote";
import {Auth} from "../components/Auth"

export const Signin = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <Auth type="signin"></Auth>
        </div>
        <div className="hidden lg:block">
        <Quote label="The people you choose to have around you make all the difference." founder="Virat Kohli" identity="Leading Indian Cricketer"></Quote>        
        </div>
      </div>
    </div>
  );
}