const MOCKED_LISTING_ITEMS = [
  '1 listing item',
  '2 listing item',
  '3 listing item',
  '4 listing item',
  '5 listing item',
  '6 listing item',
  '7 listing item',
  '8 listing item',
  '9 listing item',
  '10 listing item',
]

export function PageContent() {
  return (
    <div className='rounded-lg border bg-card p-6 text-card-foreground shadow-sm'>
      <h3 className='text-2xl font-semibold tracking-tight'>Listing</h3>
      <ul className='mt-4 divide-y rounded-lg border'>
        {MOCKED_LISTING_ITEMS.map((item) => (
          <li key={item} className='px-4 py-3 text-sm text-muted-foreground'>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
