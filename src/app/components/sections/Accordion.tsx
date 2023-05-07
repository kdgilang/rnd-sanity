'use client'

import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { BaseDataType, BasePropsType } from '@src/app/types/BasePropsType';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
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

type AccordionDataType = BaseDataType & {
  accordion_items: any[]
}

export type AccordionPropsType = BasePropsType & {
  data: AccordionDataType
}

export default function CustomAccordion({ data }: AccordionPropsType) {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');
  const { accordion_items } = data

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      { accordion_items?.map(item => (
        <Accordion
          key={`accordion-item-${item.id}`}
          expanded={expanded === `panel-${item.id}`}
          onChange={handleChange(`panel-${item.id}`)}>
          <AccordionSummary
            style={{ padding: '8px 20px' }}
            aria-controls={`panel-${item.id}d-content`}
            id={`panel-${item.id}-header`}>
            <Typography fontSize={20}>{ item.title }</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div dangerouslySetInnerHTML={{ __html: item.body }}></div>
          </AccordionDetails>
        </Accordion>
      )) }
    </div>
  );
}