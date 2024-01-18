/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/bGYxMTPVSZ9
 */
import { Button } from "@/components/ui/button"
import { DialogTrigger, DialogTitle, DialogHeader, DialogFooter, DialogContent, Dialog } from "@/components/ui/dialog"
import { SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { CardContent, Card } from "@/components/ui/card"

export function dialog() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      <Card>
        <CardContent className="flex flex-col items-center gap-2">
          <img
            alt="GHO Mockup T-Shirt"
            className="w-32 h-32 object-cover rounded-full"
            height="200"
            src="/placeholder.svg"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200"
          />
          <h2 className="text-lg font-semibold">GHO Mockup T-Shirt</h2>
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
                    <Select id="payment-method">
                      <SelectContent>
                        <SelectItem value="eth">Ethereum</SelectItem>
                        <SelectItem value="btc">Bitcoin</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="wallet">Wallet Address</Label>
                    <Input id="wallet" placeholder="Enter your wallet address" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="payment-confirmation">Payment Confirmation</Label>
                    <Input id="payment-confirmation" placeholder="Enter payment confirmation details" />
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
  )
}
