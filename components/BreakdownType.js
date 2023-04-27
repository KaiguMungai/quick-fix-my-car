/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

export default function BreakdownType({ breakdown }) {
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
        <Link href={`/breakdown/${breakdown.slug}`} legacyBehavior>
          <button className="primary-button" type="button">
            View More Details
          </button>
        </Link>
      </div>
    </div>
  );
}
