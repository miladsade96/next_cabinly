"use client";
import { useState } from "react";
import Image from "next/image";
export default function CabinCatalog({ cabins }) {
 const [capacity, setCapacity] = useState(0);
 const shown = cabins.filter((cabin) => cabin.capacity >= capacity);
 return <><div className="catalog-toolbar"><div role="group" aria-label="Filter cabins by guests">{[[0,"All cabins"],[2,"For 2 guests"],[4,"For 4 guests"],[6,"For 6 guests"]].map(([count,label]) => <button key={count} type="button" className="filter-button" aria-pressed={capacity === count} onClick={() => setCapacity(count)}>{label}</button>)}</div><p role="status">{shown.length} {shown.length === 1 ? "cabin" : "cabins"}</p></div><div className="cabin-grid">{shown.map((cabin) => <article className="cabin-card" key={cabin.id}><div className="cabin-image"><Image src={cabin.image} alt={cabin.name} fill sizes="(max-width: 760px) 100vw, 45vw" /></div><div className="cabin-copy"><p className="eyebrow">Up to {cabin.capacity} guests</p><h2>{cabin.name}</h2><p>{cabin.description}</p></div></article>)}</div></>;
}
