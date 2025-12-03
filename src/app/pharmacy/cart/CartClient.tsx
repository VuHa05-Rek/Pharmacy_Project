'use client';

import { useCartStore } from './store/cartStore';
import { useCartStep } from './hooks/useCartStep';

import EmptyCart from './components/EmptyCart';
import CartList from './components/CartList';
import CustomerForm from './components/CustomerForm';
import ConfirmOrder from './components/ConfirmOrder';

export default function CartClient() {
  const { items } = useCartStore();
  const { step, next, back } = useCartStep();

  // Step 1 — Empty
  if (items.length === 0) return <EmptyCart />;

  // Step 2 — Cart items & bill
  if (step === 1) return <CartList next={next} />;

  // Step 3 — Customer info
  if (step === 2) return <CustomerForm next={next} back={back} />;

  // Step 4 — Confirm order
  if (step === 3) return <ConfirmOrder next={next} back={back} />;

  return <div>Done!</div>;
}
