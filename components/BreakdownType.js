/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import React from 'react';

export default function BreakdownType({ breakdown }) {
  const router = useRouter();
  return (
    <div className="card">
      <img
        src={breakdown.image}
        alt={breakdown.name}
        className="rounded shadow"
      />
      <div className="flex flex-col items-center justify-center p-5">
        <h2 className="text-lg font-bold">{breakdown.name}</h2>

        <p className="mb-2 py-2">{breakdown.description}</p>

        <button
          onClick={() => router.push('login?redirect=/slug')}
          className="primary-button"
          type="button"
        >
          View More Details
        </button>
      </div>
    </div>
  );
}
