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
    <div>
      <h3>Listing</h3>
      <ul>
        {MOCKED_LISTING_ITEMS.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
