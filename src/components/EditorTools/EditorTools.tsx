import { EditorView } from 'codemirror';
import { MutableRefObject, useContext, useState } from 'react';
import QueryEditor from '../QueryEditor/QueryEditor';
import './EditorTools.scss';
import { HEADERS, VARIABLES } from '../../constants';
import { langContext } from '../../languages/langContext';

interface Props {
  variablesViewRef: MutableRefObject<EditorView | null>;
  headersViewRef: MutableRefObject<EditorView | null>;
}

export default function EditorTools({
  variablesViewRef,
  headersViewRef,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(VARIABLES);
  const tabs = [VARIABLES, HEADERS];
  const {
    dispatch: { translate },
  } = useContext(langContext);

  return (
    <div className={`vh-section ${isOpen ? 'open' : ''}`}>
      <div className="section-bar">
        {tabs.map((tab) => {
          const active = activeTab === tab ? 'active' : '';
          return (
            <div
              key={tab}
              className={`tab ${active}`}
              onClick={() => {
                setIsOpen(true);
                setActiveTab(tab);
              }}
            >
              {translate(tab)}
            </div>
          );
        })}
        <button className="toggle-tools" onClick={() => setIsOpen(!isOpen)} />
      </div>
      <div className="section-content">
        <div
          className={`tab-content ${activeTab === VARIABLES ? 'active' : ''}`}
        >
          <QueryEditor mode="default" viewRef={variablesViewRef} />
        </div>
        <div className={`tab-content ${activeTab === HEADERS ? 'active' : ''}`}>
          <QueryEditor mode="default" viewRef={headersViewRef} />
        </div>
      </div>
    </div>
  );
}
