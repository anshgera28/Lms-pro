import React, { useState } from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from './dialog';
import { Input } from './input';
import { Label } from './label';
import { Button } from './button';

const BuyCourseButton = ({ courseId }) => {
  const [open, setOpen] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handlePayment = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    // Basic validation
    if (cardNumber.length !== 16 || isNaN(cardNumber)) {
      setError('Card number must be 16 digits');
      return;
    }
    if (!/^\d{2}\/\d{2}$/.test(expiry)) {
      setError('Expiry must be in MM/YY');
      return;
    }
    if (cvv.length !== 3 || isNaN(cvv)) {
      setError('CVV must be 3 digits');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/purchase', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ courseId, cardNumber, expiry, cvv })
      });
      const data = await res.json();
      if (data.success) {
        setSuccess('Payment successful! Course purchased.');
        setTimeout(() => setOpen(false), 1500);
      } else {
        setError(data.message || 'Payment failed');
      }
    } catch (err) {
      setError('Network error');
    }
    setLoading(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full" onClick={() => setOpen(true)}>Purchase Course</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Enter Payment Details</DialogTitle>
        </DialogHeader>
        <form onSubmit={handlePayment} className="space-y-3">
          <div>
            <Label htmlFor="cardNumber">Card Number</Label>
            <Input id="cardNumber" maxLength={16} value={cardNumber} onChange={e => setCardNumber(e.target.value.replace(/\D/g, ''))} placeholder="1234123412341234" required />
          </div>
          <div className="flex gap-2">
            <div className="w-1/2">
              <Label htmlFor="expiry">Expiry (MM/YY)</Label>
              <Input id="expiry" maxLength={5} value={expiry} onChange={e => setExpiry(e.target.value.replace(/[^\d\/]/g, ''))} placeholder="09/29" required />
            </div>
            <div className="w-1/2">
              <Label htmlFor="cvv">CVV</Label>
              <Input id="cvv" maxLength={3} value={cvv} onChange={e => setCvv(e.target.value.replace(/\D/g, ''))} placeholder="123" required />
            </div>
          </div>
          {error && <div className="text-red-600 text-sm">{error}</div>}
          {success && <div className="text-green-600 text-sm">{success}</div>}
          <DialogFooter>
            <Button className="w-full" type="submit" disabled={loading}>{loading ? 'Processing...' : 'Pay Now'}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};


export default BuyCourseButton