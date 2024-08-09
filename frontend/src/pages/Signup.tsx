import { Quote } from "../components/Quote";
import {Auth} from "../components/Auth"

export const Signup = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <Auth type="signup"></Auth>
        </div>
        <div className="hidden lg:block">
          <Quote label="Your time is limited, so don't waste it living someone else's life." founder="Steve Jobs" identity="Co-Founder of Apple Inc."></Quote>
        </div>
      </div>
    </div>
  );
}