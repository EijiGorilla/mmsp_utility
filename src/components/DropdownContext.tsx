import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import Select from 'react-select';
import { useBetween } from 'use-between';
import '../index.css';
import '../App.css';
import { DropDownData } from '../customClass';
import { utilityLineLayer, utilityPointLayer } from '../layers';

function DropdownData() {
  // For dropdown filter
  const [initStationCompType, setInitStationCompType] = useState([]);

  const [stations, setStation] = useState<any>(null);
  const [companys, setCompany] = useState(null);
  const [utypes, setType] = useState<null | undefined | string>(null);

  const [companyList, setCompanyList] = useState([]);
  const [typeList, setTypeList] = useState([]);
  const [companySelected, setCompanySelected] = useState({ name: '' });

  useEffect(() => {
    const dropdownData = new DropDownData({
      featureLayers: [utilityPointLayer, utilityLineLayer],
      fieldNames: ['Station1', 'Company', 'Type'],
    });

    dropdownData.dropDownQuery().then((response: any) => {
      setInitStationCompType(response);
    });
  }, []);

  const handleStationChange = (obj: any) => {
    setStation(obj);
    setCompanyList(obj.field2);
    setCompany(null);
    setCompanySelected(obj);
    setType(null);
  };

  const handleCompanyChange = (obj: any) => {
    setCompanySelected(obj);
    setCompany(obj);
    setTypeList(obj.field3);
    setType(null);
  };

  const handleTypeChange = (obj: any) => {
    setType(obj);
  };

  return {
    handleStationChange,
    handleCompanyChange,
    handleTypeChange,
    initStationCompType,
    stations,
    companys,
    utypes,
    companyList,
    typeList,
    companySelected,
  };
}

function DropdownListDisplay() {
  const {
    handleStationChange,
    handleCompanyChange,
    handleTypeChange,
    initStationCompType,
    stations,
    companys,
    utypes,
    companyList,
    typeList,
    companySelected,
  } = useBetween(DropdownData);

  // Style CSS
  const customstyles = {
    option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
      // const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isFocused ? '#555555' : isSelected ? '#2b2b2b' : '#2b2b2b',
        color: '#ffffff',
      };
    },

    control: (defaultStyles: any) => ({
      ...defaultStyles,
      backgroundColor: '#2b2b2b',
      borderColor: '#949494',
      height: 35,
      width: '170px',
      color: '#ffffff',
    }),
    singleValue: (defaultStyles: any) => ({ ...defaultStyles, color: '#fff' }),
  };

  return (
    <div className="dropdownFilterLayout">
      <Select
        placeholder="Select Station"
        value={stations}
        options={initStationCompType}
        onChange={handleStationChange}
        getOptionLabel={(x: any) => x.field1}
        styles={customstyles}
      />
      <br />
      <Select
        placeholder="Select Company"
        value={companys}
        options={companyList}
        onChange={handleCompanyChange}
        getOptionLabel={(x: any) => x.name}
        styles={customstyles}
      />
      <br />
      <Select
        placeholder="Select Type"
        value={utypes}
        options={typeList}
        onChange={handleTypeChange}
        getOptionLabel={(x: any) => x.name}
        styles={customstyles}
      />
    </div>
  );
}

type DropdownContextType = {
  stations: any;
  companySelected: any;
  utypes: any;
};

type Props = {
  children: ReactNode;
};

const initialState = {
  stations: undefined,
  companySelected: undefined,
  utypes: undefined,
};

const DropdownContext = createContext<DropdownContextType>({
  ...initialState,
});

export function DropdownDataProvider({ children }: Props) {
  const { stations, companySelected, utypes } = useBetween(DropdownData);

  return (
    <DropdownContext.Provider
      value={{
        stations,
        companySelected,
        utypes,
      }}
    >
      {children}
    </DropdownContext.Provider>
  );
}

export const useDropdownContext = () => useContext(DropdownContext);
export default DropdownListDisplay;
