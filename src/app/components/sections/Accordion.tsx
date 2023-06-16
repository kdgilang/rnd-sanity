'use client'

import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { BasePropsType } from 'src/app/types/BasePropsType';
import PortableBlock from "src/app/components/PortableBlock";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  boxShadow: '0 0 2px rgba(0, 0, 0, 0.2)',
  marginBottom: 5,
  borderRadius: 5,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<span className="fa fa-angle-down"></span>}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, .05)',
  // flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(-90deg)',
  },
  '& .MuiAccordionSummary-content': {
    // marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export type AccordionPropsType = BasePropsType & {
  data: any
}

export default function CustomAccordion({ data }: AccordionPropsType) {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');
  const { accordionItems } = data

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <>
      { accordionItems?.map((item: any) => (
        <Accordion
          className="wow fadeIn" data-wow-delay="300ms"
          key={`accordion-item-${item?._key}`}
          expanded={expanded === `panel-${item?._key}`}
          onChange={handleChange(`panel-${item?._key}`)}>
          <AccordionSummary
            style={{ padding: '8px 20px' }}
            aria-controls={`panel-${item?._key}d-content`}
            id={`panel-${item?._key}-header`}>
            <Typography fontSize={20}>{ item?.title }</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <PortableBlock value={ item?.body }  />
          </AccordionDetails>
        </Accordion>
      )) }
    </>
  );
}