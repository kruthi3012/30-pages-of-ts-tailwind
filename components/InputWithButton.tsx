import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import './components-css.css'

export function InputWithButton() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Your Email" className="font-roboto-mono font-roboto-mono-300 "/>
      <Button type="submit" className="custom-button-color font-roboto-mono font-roboto-mono-300 font-bold tracking-wider ">Subscribe</Button>
    </div>
  )
}
