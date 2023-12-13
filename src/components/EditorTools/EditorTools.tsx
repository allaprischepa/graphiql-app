import { EditorView } from 'codemirror';
import { MutableRefObject, useState } from 'react';
import QueryEditor from '../QueryEditor/QueryEditor';
import { capitalize } from '../../utils/utils';
import './EditorTools.scss';

interface Props {
  variablesViewRef: MutableRefObject<EditorView | null>;
  headersViewRef: MutableRefObject<EditorView | null>;
}

export default function EditorTools({
  variablesViewRef,
  headersViewRef,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('variables');
  const tabs = ['variables', 'headers'];

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
              {capitalize(tab)}
            </div>
          );
        })}
        <button className="toggle-tools" onClick={() => setIsOpen(!isOpen)} />
      </div>
      <div className="section-content">
        <div
          className={`tab-content ${activeTab === 'variables' ? 'active' : ''}`}
        >
          <QueryEditor mode="default" viewRef={variablesViewRef} />
        </div>
        <div
          className={`tab-content ${activeTab === 'headers' ? 'active' : ''}`}
        >
          <QueryEditor mode="default" viewRef={headersViewRef} />
        </div>
      </div>
    </div>
  );
}
