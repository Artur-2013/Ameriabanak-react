import React from 'react';
import './UsefulLinks.css';

import { CreditCard } from 'lucide-react';
export default function UsefulLinnks() {
return(
<a href="#cards" className="useful-links__card">
  <div className="useful-links__icon">
    <CreditCard size={32} color="#7ec04f" strokeWidth={1.5} />
  </div>
  <span className="useful-links__card-title">Քարտեր</span>
</a>)
}