import { useEffect, useState } from 'react';
import DropdownListDisplay from './DropdownContext';
import { dateUpdate } from '../Query';

function Header() {
  const [asOfDate, setAsOfDate] = useState<undefined | any | unknown>(null);

  useEffect(() => {
    dateUpdate().then((response: any) => {
      setAsOfDate(response);
    });
  }, []);

  return (
    <>
      <header
        slot="header"
        id="header-title"
        style={{
          display: 'flex',
          width: '100%',
          padding: '0 1rem',
          borderStyle: 'solid',
          borderWidth: 1,
          height: '70px',
        }}
      >
        <img
          src="https://EijiGorilla.github.io/Symbols/Projec_Logo/DOTr_Logo_v2.png"
          alt="DOTr Logo"
          height={'55px'}
          width={'55px'}
          style={{ marginBottom: 'auto', marginTop: 'auto' }}
        />
        <b className="headerTitle">MMSP UTILITY</b>
        <div className="date">{!asOfDate ? '' : 'As of ' + asOfDate}</div>

        {/* Dropdown List */}
        <DropdownListDisplay />

        <img
          src="https://EijiGorilla.github.io/Symbols/Projec_Logo/MMSP.png"
          alt="GCR Logo"
          height={'50px'}
          width={'75px'}
          style={{
            marginBottom: 'auto',
            marginTop: 'auto',
            marginLeft: 'auto',
            marginRight: '5rem',
          }}
        />
      </header>
    </>
  );
}

export default Header;
