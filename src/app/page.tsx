/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/nWUIWyPhM93
 */
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import {
  DialogTrigger,
  DialogTitle,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog,
} from "@/components/ui/dialog";
import { SelectItem, SelectContent, Select } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { CardContent, Card } from "@/components/ui/card";
import { HeightIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
        <Link className="flex items-center gap-2 font-semibold" href="#">
          <img className="photo" src={"logo.png"} style={{height:50, width:50}} />
          <span className="">Boo</span>
        </Link>
      </header>

      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 md:p-6">
          <Card>
            <CardContent className="flex flex-col items-center gap-2">
              <div className="relative group overflow-hidden rounded-lg">
                <img
                  alt=""
                  className="object-cover w-full h-60"
                  height={400}
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.coingecko.com%2Frewards%2Fimages%2F50%2FArtboard_26_5x4.jpg%3F1607002109&f=1&nofb=1&ipt=614d86fee914aac59f4c65059ea69f98cf0a13685ae0fb30f29d83eaf778acbd&ipo=images"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width={500}
                />
                <div className="bg-white p-4 dark:bg-gray-950">
                  <h2 className="font-semibold text-lg md:text-xl">
                    Aave T-Shirt
                  </h2>
    
                  <h4 className="font-semibold text-base md:text-lg">
                    GHO 29.99
                  </h4>
                </div>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Buy Now</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Payment Confirmation</DialogTitle>
                  </DialogHeader>
                  <div>
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="wallet">Wallet Address</Label>
                        <Input
                          id="wallet"
                          placeholder="Enter your wallet address"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="payment-confirmation">
                          Payment Confirmation
                        </Label>
                        <Input
                          id="payment-confirmation"
                          placeholder="Enter payment confirmation details"
                        />
                      </div>
                    </form>
                  </div>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button>Claim Product</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>

      </main>
    </div>
  );
}

