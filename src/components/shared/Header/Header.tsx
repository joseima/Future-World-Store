import Link from 'next/link'
import styles from './Header.module.sass'
import { validateAccessToken } from 'app/utils/aut/validateAccesToken'
import { ShoppingCart } from '../ShoppingCart'

export const Header = async () => {
  const customer = await validateAccessToken()

  return (
    <header className={styles.Header}>
      <nav>
        <ul className={styles.Header__list}>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/store">
              Store
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.Header__user}>
        {customer?.firstName ? (<p>Hello {customer.firstName}</p>) : (<><Link href="/login">Login</Link><Link href="/signup">Signup</Link></>)}
        <ShoppingCart />
      </div>
    </header>
    )
}