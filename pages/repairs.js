import Layout from '@/components/Layout';
import data from '@/utils/data';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function RepairScreen() {
  const { router } = useRouter();
  const { repairs } = router;
  const breakdown = data.breakdowns.find((y) => y.repairslug === repairs);
  return (
    <Layout title={breakdown.name}>
      <nav className="flex h-12  breakdown-nav items-center px-5 shadow-md justify-between">
        <h1 className="text-2xl font-bold">{breakdown.name}</h1>
        <div>
          <Link href={`/breakdown/${breakdown.slug}`} legacyBehavior>
            <a className="px-10 link-style text-lg">Symptoms</a>
          </Link>
          <Link href="/pages/repairs" legacyBehavior>
            <a className="px-10 link text-lg">Repair Procedure</a>
          </Link>
          <Link href="/" legacyBehavior>
            <a className="px-10 link text-lg">Back to Home Page</a>
          </Link>
        </div>
      </nav>
      <div className="justify-between items-center">
        <h1 className="font-bold text-2xl m-auto mt-5 mb-5">Symptoms</h1>
        <div className="text-display">
          <h3 className="py-2  font-bold">1.{breakdown.step1}</h3>
          <p className="py-1">{breakdown.step1details}</p>
        </div>
        <div className="text-display">
          <h3 className="py-2  font-bold">2.{breakdown.step2}</h3>
          <p className="py-1">{breakdown.step2details}</p>
        </div>
        <div className="text-display">
          <h3 className="py-2  font-bold">3.{breakdown.step3}</h3>
          <p className="py-1">{breakdown.step3details}</p>
        </div>
        <div className="text-display">
          <h3 className="py-2  font-bold">4.{breakdown.step4}</h3>
          <p className="py-1">{breakdown.step4details}</p>
        </div>
        <div className="text-display">
          <h3 className="py-2  font-bold">5.{breakdown.step5}</h3>
          <p className="py-1">{breakdown.step5details}</p>
        </div>
        <div className="text-display">
          <h3 className="py-2  font-bold">6.{breakdown.step6}</h3>
          <p className="py-1">{breakdown.step6details}</p>
        </div>
        <div className="text-display">
          <h3 className="py-2  font-bold">7.{breakdown.step7}</h3>
          <p className="py-1">{breakdown.step7details}</p>
        </div>
        <div className="text-display">
          <h3 className="py-2  font-bold">7.{breakdown.step8}</h3>
          <p className="py-1">{breakdown.step8details}</p>
        </div>
        <div className="text-display">
          <h3 className="py-2  font-bold">7.{breakdown.step9}</h3>
          <p className="py-1">{breakdown.step9details}</p>
        </div>
        <div className="text-display">
          <h3 className="py-2  font-bold">7.{breakdown.step10}</h3>
          <p className="py-1">{breakdown.step10details}</p>
        </div>
        <div className="text-display">
          <h3 className="py-2  font-bold">7.{breakdown.step11}</h3>
          <p className="py-1">{breakdown.step11details}</p>
        </div>
        <div className="text-display">
          <h3 className="py-2  font-bold">7.{breakdown.step12}</h3>
          <p className="py-1">{breakdown.step12details}</p>
        </div>
      </div>
    </Layout>
  );
}
